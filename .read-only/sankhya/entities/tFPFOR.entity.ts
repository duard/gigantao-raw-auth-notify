import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPFOR', ['codform'], { unique: true })
@Entity('TFPFOR', { schema: 'SANKHYA' })
export class TfpforEntity {
  @Column('smallint', { primary: true, name: 'CODFORM' })
  codform: number;

  @Column('varchar', { name: 'DESCRFORM', length: 255 })
  descrform: string;

  @Column('text', { name: 'FORMULA' })
  formula: string;

  @Column('text', { name: 'FORMULANTERIOR', nullable: true })
  formulanterior: string | null;

  @Column('text', { name: 'CODFORMIND', nullable: true })
  codformind: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'SANKHYA', length: 1, default: () => "'N'" })
  sankhya: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfors)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
