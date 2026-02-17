import {UseCase} from "../../../../shared/application/UseCase";
import {convertGetPostRequest2Dto, GetPostRequest} from "../dto";
import {GetPostInputPort} from "../port/PostInputPort";
import {PostOutputPort} from "../port/PostOutputPort";
import {PostAggregateRepository} from "../../domain/repository/PostAggregateRepository";
import {inject, injectable} from "tsyringe";

@injectable()
export class GetPostUseCase extends UseCase<GetPostRequest> implements GetPostInputPort {
    constructor(
        @inject("PostAggregateRepository") private readonly postAggregateRepository: PostAggregateRepository,
    ) {
        super();
    }

    async execute(request: GetPostRequest): Promise<void> {
        try {
            // outputPortの設定チェック
            this.validateOutputPort();
            // Repository経由で取得
            const aggregate = await this.postAggregateRepository.findByID(convertGetPostRequest2Dto(request));
            if (aggregate === null) {
                throw new Error("NO POST");
            }
            // Postエンティティを使ってResponseを作成するため、プライベートなrootEntityを取得
            const post = (aggregate as any).getRoot();
            (this.outputPort as PostOutputPort).successGetPost({post});
        } catch {
            (this.outputPort as PostOutputPort).failure(new Error("error"));
        }

    }
}
