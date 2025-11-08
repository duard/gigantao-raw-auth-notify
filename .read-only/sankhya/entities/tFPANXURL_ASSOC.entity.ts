import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpanxurlEntity } from './tFPANXURL.entity';

@Index('PK_TFPANXURL_ASSOC', ['id'], { unique: true })
@Entity('TFPANXURL_ASSOC', { schema: 'SANKHYA' })
export class TfpanxurlAssocEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('smallint', { name: 'TIPO_ENTIDADE' })
  tipoEntidade: number;

  @Column('smallint', { name: 'ID_ENTIDADE' })
  idEntidade: number;

  @Column('int', { name: 'ID_REQUISICAO_ENTIDADE' })
  idRequisicaoEntidade: number;

  @ManyToOne(
    () => TfpanxurlEntity,
    (tfpanxurlEntity) => tfpanxurlEntity.tfpanxurlAssocs,
  )
  @JoinColumn([{ name: 'ID_URL', referencedColumnName: 'id' }])
  idUrl: TfpanxurlEntity;
}
