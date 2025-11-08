import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcprEntity } from './tGFCPR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFSPR', ['codcpr', 'sequencia'], { unique: true })
@Entity('TGFSPR', { schema: 'SANKHYA' })
export class TgfsprEntity {
  @Column('int', { primary: true, name: 'CODCPR' })
  codcpr: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('datetime', { name: 'DTEXE', nullable: true })
  dtexe: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfcprEntity, (tgfcprEntity) => tgfcprEntity.tgfsprs)
  @JoinColumn([{ name: 'CODCPR', referencedColumnName: 'codcpr' }])
  codcpr2: TgfcprEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfsprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
