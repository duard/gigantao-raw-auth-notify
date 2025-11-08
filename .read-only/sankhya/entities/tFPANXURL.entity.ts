import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpanxurlAssocEntity } from './tFPANXURL_ASSOC.entity';

@Index('PK_TFPANXURL', ['id'], { unique: true })
@Entity('TFPANXURL', { schema: 'SANKHYA' })
export class TfpanxurlEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('text', { name: 'URL' })
  url: string;

  @Column('smallint', { name: 'TENTATIVAS', default: () => '(0)' })
  tentativas: number;

  @Column('smallint', { name: 'STATUS' })
  status: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @OneToMany(
    () => TfpanxurlAssocEntity,
    (tfpanxurlAssocEntity) => tfpanxurlAssocEntity.idUrl,
  )
  tfpanxurlAssocs: TfpanxurlAssocEntity[];
}
