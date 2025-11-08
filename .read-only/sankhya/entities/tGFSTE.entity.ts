import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfterEntity } from './tGFTER.entity';

@Index('PK_TGFSTE', ['codter', 'sequencia'], { unique: true })
@Entity('TGFSTE', { schema: 'SANKHYA' })
export class TgfsteEntity {
  @Column('int', { primary: true, name: 'CODTER' })
  codter: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('datetime', { name: 'DTEXE', nullable: true })
  dtexe: Date | null;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfstes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfterEntity, (tgfterEntity) => tgfterEntity.tgfstes)
  @JoinColumn([{ name: 'CODTER', referencedColumnName: 'codter' }])
  codter2: TgfterEntity;
}
