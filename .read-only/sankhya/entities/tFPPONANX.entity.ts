import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpattEntity } from './tFPATT.entity';

@Index('PK_TFPPONANX', ['id'], { unique: true })
@Entity('TFPPONANX', { schema: 'SANKHYA' })
export class TfpponanxEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('image', { name: 'ANEXO', nullable: true })
  anexo: Buffer | null;

  @Column('varchar', { name: 'FILETYPE', nullable: true, length: 15 })
  filetype: string | null;

  @Column('varchar', { name: 'FILENAME', nullable: true, length: 80 })
  filename: string | null;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @ManyToOne(() => TfpattEntity, (tfpattEntity) => tfpattEntity.tfpponanxes)
  @JoinColumn([
    { name: 'NUOCOR', referencedColumnName: 'nuocor' },
    { name: 'NUATT', referencedColumnName: 'nuatt' },
  ])
  tfpatt: TfpattEntity;
}
