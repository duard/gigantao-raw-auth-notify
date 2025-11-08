import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfcavcEntity } from './tFCAVC.entity';

@Index('PK_TFCAVA', ['codavaliacao'], { unique: true })
@Entity('TFCAVA', { schema: 'SANKHYA' })
export class TfcavaEntity {
  @Column('int', { primary: true, name: 'CODAVALIACAO' })
  codavaliacao: number;

  @Column('char', { name: 'DESCRAVALIACAO', nullable: true, length: 30 })
  descravaliacao: string | null;

  @Column('char', { name: 'GERAEMAIL', nullable: true, length: 1 })
  geraemail: string | null;

  @Column('text', { name: 'TEXTOPADRAOEMAIL', nullable: true })
  textopadraoemail: string | null;

  @OneToMany(() => TfcavcEntity, (tfcavcEntity) => tfcavcEntity.codavaliacao2)
  tfcavcs: TfcavcEntity[];
}
