import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfcttEntity } from './tGFCTT.entity';
import { TcsocoEntity } from './tCSOCO.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcspscEntity } from './tCSPSC.entity';

@Index('PK_TCSOCC', ['numcontrato', 'codprod', 'dtocor'], { unique: true })
@Entity('TCSOCC', { schema: 'SANKHYA' })
export class TcsoccEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DTOCOR' })
  dtocor: Date;

  @Column('text', { name: 'DESCRICAO' })
  descricao: string;

  @Column('int', { name: 'NUMUSUARIOS', nullable: true })
  numusuarios: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsoccs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsoccs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.tcsoccs)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODCONTATO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TcsocoEntity, (tcsocoEntity) => tcsocoEntity.tcsoccs)
  @JoinColumn([{ name: 'CODOCOR', referencedColumnName: 'codocor' }])
  codocor: TcsocoEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcsoccs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TcspscEntity, (tcspscEntity) => tcspscEntity.tcsoccs)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcspsc: TcspscEntity;
}
