import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPNTL', ['codnatlesao'], { unique: true })
@Entity('TFPNTL', { schema: 'SANKHYA' })
export class TfpntlEntity {
  @Column('int', { primary: true, name: 'CODNATLESAO' })
  codnatlesao: number;

  @Column('varchar', { name: 'DESCRNATLESAO', length: 250 })
  descrnatlesao: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpntls)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
