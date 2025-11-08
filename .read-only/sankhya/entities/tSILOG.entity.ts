import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSILOG', ['codusu', 'dhevento', 'sequencia'], { unique: true })
@Entity('TSILOG', { schema: 'SANKHYA' })
export class TsilogEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { primary: true, name: 'DHEVENTO' })
  dhevento: Date;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 255 })
  descricao: string | null;

  @Column('char', { name: 'COMPUTADOR', length: 50 })
  computador: string;

  @Column('int', { primary: true, name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilogs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
