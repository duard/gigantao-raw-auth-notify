import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpocoEntity } from './tFPOCO.entity';

@Index('PK_TFPANXOCO', ['nuocor', 'filename'], { unique: true })
@Entity('TFPANXOCO', { schema: 'SANKHYA' })
export class TfpanxocoEntity {
  @Column('int', { primary: true, name: 'NUOCOR' })
  nuocor: number;

  @Column('image', { name: 'ANEXO', nullable: true })
  anexo: Buffer | null;

  @Column('varchar', { name: 'FILETYPE', nullable: true, length: 15 })
  filetype: string | null;

  @Column('varchar', { primary: true, name: 'FILENAME', length: 80 })
  filename: string;

  @ManyToOne(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.tfpanxocos)
  @JoinColumn([{ name: 'NUOCOR', referencedColumnName: 'nuocor' }])
  nuocor2: TfpocoEntity;
}
