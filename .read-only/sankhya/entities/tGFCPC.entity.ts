import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcocEntity } from './tGFCOC.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFCPC', ['codparc', 'codctabcoint'], { unique: true })
@Entity('TGFCPC', { schema: 'SANKHYA' })
export class TgfcpcEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcpcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcocEntity, (tgfcocEntity) => tgfcocEntity.tgfcpcs)
  @JoinColumn([
    { name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' },
    { name: 'CONVENIO', referencedColumnName: 'convenio' },
  ])
  tgfcoc: TgfcocEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcpcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
