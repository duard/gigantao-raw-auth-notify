import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpreqEntity } from './tFPREQ.entity';

@Index('PK_TFPANX', ['id'], { unique: true })
@Entity('TFPANX', { schema: 'SANKHYA' })
export class TfpanxEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('image', { name: 'ANEXO', nullable: true })
  anexo: Buffer | null;

  @Column('varchar', { name: 'FILETYPE', nullable: true, length: 15 })
  filetype: string | null;

  @Column('varchar', { name: 'FILENAME', nullable: true, length: 80 })
  filename: string | null;

  @Column('varchar', { name: 'TIPOORIGEM', nullable: true, length: 1 })
  tipoorigem: string | null;

  @Column('varchar', { name: 'DOCORIGEM', nullable: true, length: 1 })
  docorigem: string | null;

  @ManyToOne(() => TfpreqEntity, (tfpreqEntity) => tfpreqEntity.tfpanxes)
  @JoinColumn([{ name: 'REQID', referencedColumnName: 'id' }])
  req: TfpreqEntity;
}
