import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPTRC', ['codtreicap'], { unique: true })
@Entity('TFPTRC', { schema: 'SANKHYA' })
export class TfptrcEntity {
  @Column('int', { primary: true, name: 'CODTREICAP' })
  codtreicap: number;

  @Column('varchar', { name: 'DESCRTREICAP', length: 255 })
  descrtreicap: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfptrcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
